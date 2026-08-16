import { Controller } from 'react-hook-form';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import {AppButton, AppDatePicker, AppSelect, AppTextInput, SegmentedControl } from '@/components';
import { getTransactionTypeOptions } from '../../constants';
import { useTransactionForm } from './useTransactionForm';
import type { TransactionFormProps } from './types';
import { styles } from './styles';

export function TransactionForm({initialValues, onSubmit, submitLabel, loading}: TransactionFormProps) {
  const { t } = useTranslation();
  const { control, categoryOptions, submit } = useTransactionForm({initialValues, onSubmit});
  const TRANSACTION_TYPE_OPTIONS = getTransactionTypeOptions(t);

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="type"
        render={({ field }) => (<SegmentedControl
            value={field.value}
            options={TRANSACTION_TYPE_OPTIONS}
            onValueChange={field.onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="amount"
        render={({ field, fieldState }) => (
          <AppTextInput
            label={t("transactions.form.amountLabel")}
            value={typeof field.value === 'string' ? field.value : ''}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            keyboardType="decimal-pad"
            error={fieldState.error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="category"
        render={({ field, fieldState }) => (
          <AppSelect
            label={t("transactions.form.categoryLabel")}
            value={field.value}
            options={categoryOptions}
            onValueChange={field.onChange}
            placeholder={t("transactions.form.categoryPlaceholder")}
            error={fieldState.error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="date"
        render={({ field, fieldState }) => (
          <AppDatePicker
            label={t("transactions.form.dateLabel")}
            value={field.value}
            onChange={field.onChange}
            error={fieldState.error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({ field, fieldState }) => (
          <AppTextInput
            label={t("transactions.form.descriptionLabel")}
            value={typeof field.value === 'string' ? field.value : ''}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            placeholder={t("transactions.form.descriptionPlaceholder")}
            error={fieldState.error?.message}
            multiline
          />
        )}
      />

      <AppButton title={submitLabel} onPress={submit} disabled={loading}/>
    </View>
  );
}