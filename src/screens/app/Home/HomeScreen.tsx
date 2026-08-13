import { ScreenContainer } from "@/components";
import { BalanceCard, HomeHeader, MonthlySummary, RecentTransactions } from "./components";
import { AddTransactionFab } from "../components";
import { calculateBalance, calculateMonthlySummary, useTransactions } from "@/domains/transactions";
import { View, ActivityIndicator } from "react-native";
import { styles, loadingProps } from "./styles";
import { HomeScreenProps } from "./types";

export function HomeScreen({navigation}: HomeScreenProps) {
    const { transactions, isLoading } = useTransactions();
    const balance = calculateBalance(transactions);
    const monthlySummary = calculateMonthlySummary(transactions);

    function handleViewAll() {
        navigation.getParent()?.navigate("Transactions", {screen: "TransactionList"});
    }

    function handleAddTransaction() {
        navigation.getParent()?.navigate("Transactions", {screen: "CreateTransaction"});
    }

    return (
        <ScreenContainer contentContainerStyle={styles.container} edges={["left", "right", "bottom"]}>
            <View style={styles.content}>
                {isLoading ? (
                    <View style={styles.loading}>
                        <ActivityIndicator size="large" {...loadingProps} />
                    </View>
                ) : (
                    <>
                        <View style={styles.topContent}>
                            <HomeHeader />
                            <BalanceCard balance={balance} />
                            <MonthlySummary income={monthlySummary.income} expense={monthlySummary.expense} />
                        </View>

                        <RecentTransactions transactions={transactions} onViewAll={handleViewAll} />
                    </>
                )}
            </View>

            <AddTransactionFab onPress={handleAddTransaction} />
        </ScreenContainer>
    );
}
