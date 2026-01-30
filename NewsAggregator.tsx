import React, { useEffect, useState } from 'react';
import { 
  ActivityIndicator, 
  FlatList, 
  Linking, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View,
  SafeAreaView
} from 'react-native';

interface NewsItem {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

const NewsAggregator = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // NOTE: Replace 'YOUR_API_KEY' with your actual key
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY');
        const data = await response.json();
        if (data.status === 'ok') {
          setNews(data.articles);
        } else {
          // Fallback log if API fails
          console.log('API Error: ', data.message);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handlePress = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  };

  const renderNewsItem = ({ item, index }: { item: NewsItem; index: number }) => {
    // Add a different style for the very first item (Featured Article)
    const isFeatured = index === 0;

    return (
      <TouchableOpacity 
        style={[styles.card, isFeatured && styles.featuredCard]} 
        onPress={() => handlePress(item.url)}
        activeOpacity={0.9}
      >
        <View style={styles.badgeContainer}>
           <Text style={styles.sourceBadge}>{item.source.name}</Text>
        </View>
        
        <Text 
          style={[styles.headline, isFeatured && styles.featuredHeadline]} 
          numberOfLines={3}
        >
          {item.title}
        </Text>
        
        {item.description ? (
          <Text style={styles.summary} numberOfLines={isFeatured ? 4 : 2}>
            {item.description}
          </Text>
        ) : null}

        <View style={styles.footer}>
          <Text style={styles.date}>
            {new Date(item.publishedAt).toLocaleDateString(undefined, {
              month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
            })}
          </Text>
          <Text style={styles.readMore}>Read Story →</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appTitle}>DAILY<Text style={styles.appTitleBold}>BRIEF</Text></Text>
        <Text style={styles.subTitle}>Top headlines for today</Text>
      </View>

      {loading ? (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#ea580c" />
          <Text style={styles.loadingText}>Curating your feed...</Text>
        </View>
      ) : (
        <FlatList
          data={news}
          // Fallback to index if URL is missing to ensure unique keys
          keyExtractor={(item, index) => item.url || index.toString()}
          renderItem={renderNewsItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7ed', // Cream background (Paper feel)
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#fed7aa',
  },
  appTitle: {
    fontSize: 28,
    color: '#2c1810',
    letterSpacing: -1,
    fontVariant: ['small-caps'],
  },
  appTitleBold: {
    fontWeight: '900',
    color: '#ea580c', // Burnt Orange
  },
  subTitle: {
    fontSize: 14,
    color: '#9a3412',
    marginTop: 2,
    fontWeight: '500',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#ea580c',
    fontWeight: '600',
  },
  listContent: {
    padding: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    // Modern shadow
    shadowColor: '#431407',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  featuredCard: {
    backgroundColor: '#2c1810', // Dark background for featured item
    marginBottom: 24,
    padding: 24,
  },
  badgeContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  sourceBadge: {
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
    color: '#ea580c',
    letterSpacing: 1,
  },
  headline: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1f2937',
    marginBottom: 8,
    lineHeight: 24,
  },
  featuredHeadline: {
    color: '#fff7ed', // Light text for featured
    fontSize: 24,
    lineHeight: 30,
  },
  summary: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  date: {
    fontSize: 12,
    color: '#9ca3af',
  },
  readMore: {
    fontSize: 12,
    fontWeight: '700',
    color: '#ea580c',
  },
});

export default NewsAggregator;