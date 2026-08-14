import { Controller } from 'react-hook-form';
import { View } from 'react-native';
import {AppButton, AppDatePicker, AppSelect, AppTextInput, SegmentedControl } from '@/components';
import { TRANSACTION_TYPE_OPTIONS } from '../../constants';
import { useTransactionForm } from './useTransactionForm';
import type { TransactionFormProps } from './types';
import { styles } from './styles';

export function TransactionForm({initialValues, onSubmit}: TransactionFormProps) {
  const { control, categoryOptions, submit } = useTransactionForm({initialValues, onSubmit});

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
            label="Valor"
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
            label="Categoria"
            value={field.value}
            options={categoryOptions}
            onValueChange={field.onChange}
            placeholder="Selecione uma categoria"
            error={fieldState.error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="date"
        render={({ field, fieldState }) => (
          <AppDatePicker
            label="Data"
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
            label="Descrição"
            value={typeof field.value === 'string' ? field.value : ''}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            placeholder="Digite uma descrição"
            error={fieldState.error?.message}
            multiline
          />
        )}
      />

      <AppButton title="Salvar" onPress={submit}/>
    </View>
  );
}