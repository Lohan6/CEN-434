import React, { useEffect, useState } from 'react';
import { 
  Button, 
  FlatList, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View, 
  StatusBar 
} from 'react-native';

interface Expense {
  id: number;
  desc: string;
  amount: number;
}

const PersonalBudgetApp = () => {
  // UI State handled as strings to prevent cursor jumping/decimal issues
  const [incomeInput, setIncomeInput] = useState(''); 
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [description, setDescription] = useState('');
  const [amountInput, setAmountInput] = useState('');
  const [balance, setBalance] = useState(0);

  // Derived state for calculation
  const income = parseFloat(incomeInput) || 0;

  useEffect(() => {
    const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    setBalance(income - totalExpenses);
  }, [income, expenses]);

  const addExpense = () => {
    const val = parseFloat(amountInput);
    if (description && !isNaN(val)) {
      setExpenses([
        ...expenses, 
        { id: Date.now(), desc: description, amount: val }
      ]);
      setDescription('');
      setAmountInput('');
    }
  };

  const fetchBankTransactions = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
      const data = await response.json();
      
      const newExpenses = data.slice(0, 3).map((item: any, index: number) => ({
        id: Date.now() + index + Math.random(), // Ensure unique ID
        desc: `Bank Txn: ${item.id}`,
        amount: Math.floor(Math.random() * 5000) + 100, // Mock amount
      }));
      setExpenses(prevExpenses => [...prevExpenses, ...newExpenses]);
    } catch (error) {
      console.error(error);
    }
  };

  const renderExpense = ({ item }: { item: Expense }) => (
    <View style={styles.card}>
      <View style={styles.iconPlaceholder}>
        <Text style={styles.iconText}>$</Text>
      </View>
      <View style={styles.expenseInfo}>
        <Text style={styles.expenseDesc}>{item.desc}</Text>
        <Text style={styles.expenseDate}>Today</Text>
      </View>
      <Text style={styles.expenseAmount}>- ₦{item.amount.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Wallet</Text>
      </View>

      {/* Balance Card */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Total Balance</Text>
        <Text style={styles.balanceValue}>₦ {balance.toFixed(2)}</Text>
        <View style={styles.inputContainer}>
            <Text style={styles.currencyPrefix}>Income: ₦</Text>
            <TextInput
                style={styles.incomeInput}
                placeholder="0.00"
                placeholderTextColor="rgba(255,255,255,0.5)"
                keyboardType="numeric"
                value={incomeInput}
                onChangeText={setIncomeInput}
            />
        </View>
      </View>

      {/* Input Section */}
      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>New Transaction</Text>
        <View style={styles.row}>
            <TextInput
                style={[styles.input, { flex: 2, marginRight: 10 }]}
                placeholder="Description (e.g. Food)"
                placeholderTextColor="#94a3b8"
                value={description}
                onChangeText={setDescription}
            />
            <TextInput
                style={[styles.input, { flex: 1 }]}
                placeholder="Amount"
                placeholderTextColor="#94a3b8"
                keyboardType="numeric"
                value={amountInput}
                onChangeText={setAmountInput}
            />
        </View>
        
        <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.primaryButton} onPress={addExpense}>
                <Text style={styles.buttonText}>Add Expense</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.secondaryButton} onPress={fetchBankTransactions}>
                <Text style={styles.secondaryButtonText}>Sync Bank</Text>
            </TouchableOpacity>
        </View>
      </View>

      {/* List Section */}
      <View style={styles.listContainer}>
         <Text style={styles.sectionTitle}>Recent Activity</Text>
         <FlatList
            data={expenses}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderExpense}
            contentContainerStyle={{ paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
         />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a', // Dark Slate
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#f8fafc',
  },
  balanceCard: {
    backgroundColor: '#3b82f6', // Bright Blue
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  balanceLabel: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  balanceValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  currencyPrefix: {
    color: '#fff',
    fontWeight: '600',
  },
  incomeInput: {
    flex: 1,
    height: 40,
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  formContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#cbd5e1',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 14,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#334155',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#14b8a6', // Teal
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#475569',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#94a3b8',
    fontWeight: '600',
    fontSize: 16,
  },
  listContainer: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  iconPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#334155',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconText: {
    color: '#94a3b8',
    fontSize: 18,
    fontWeight: 'bold',
  },
  expenseInfo: {
    flex: 1,
  },
  expenseDesc: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f1f5f9',
  },
  expenseDate: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 2,
  },
  expenseAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f87171', // Soft Red
  },
});

export default PersonalBudgetApp;
