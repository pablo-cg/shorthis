import { nanoid } from 'nanoid';
import { object, string, type InferType } from 'yup';
import type { LinkItem } from '~/types/link';

export const useDeleteLink = () => {
  const currentLinkItem = useState<LinkItem>('currentLinkItem');

  const confirmationId = ref(nanoid(5));

  const validationSchema = object({
    confirmation: string()
      .required('Please confirm the deletion.')
      .equals(
        [confirmationId.value],
        'The values do not match. Check the validation.',
      ),
  });

  type FormSchema = InferType<typeof validationSchema>;

  const { handleSubmit, resetForm, values } = useForm<FormSchema>({
    validationSchema,
  });

  return {
    currentLinkItem,
    handleSubmit,
    confirmationId,
    resetForm,
    values,
  };
};
