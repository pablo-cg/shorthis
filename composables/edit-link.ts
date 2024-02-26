import { object, string, boolean, bool, type InferType, number } from 'yup';
import { type LinkItem } from '~/types/link';

export const useEditLink = () => {
  const currentLinkItem = useState<LinkItem | null>('currentLinkItem');

  const validationSchema = object({
    url: string().url('Must be a valid URL.').required('Must provide a URL.'),
    description: string().optional(),
    active: boolean().required(),
  });

  type FormSchema = InferType<typeof validationSchema>;

  const { handleSubmit, resetForm, setValues, values } = useForm<FormSchema>({
    validationSchema: validationSchema,
  });

  return {
    handleSubmit,
    resetForm,
    setValues,
    values,
    currentLinkItem,
  };
};
