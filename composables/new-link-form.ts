import { nanoid } from 'nanoid';
import { object, string, type InferType } from 'yup';

const validationSchema = object({
  url: string().url('Must be a valid URL.').required('Must provide a URL.'),
  slug: string()
    .max(6, 'Ensure the slug does not exceed 6 characters in length.')
    .min(3, 'Ensure the slug is at least 3 characters long.')
    .required('Must provide a slug.'),
  description: string().optional(),
});

type FormSchema = InferType<typeof validationSchema>;

export const useNewLinkForm = () => {
  function randomizeSlug() {
    setFieldValue('slug', nanoid(6));
  }

  const { handleSubmit, resetForm, values, setFieldValue } =
    useForm<FormSchema>({
      validationSchema: validationSchema,
    });

  const createLink = handleSubmit((values) => {
    console.log(values);
  });

  return {
    createLink,
    resetForm,
    formValues: values,
    randomizeSlug,
  };
};
