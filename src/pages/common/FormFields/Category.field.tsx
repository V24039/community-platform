import { useEffect, useState } from 'react'
import { Field } from 'react-final-form'
import { CategoriesSelectV2 } from 'src/pages/common/Category/CategoriesSelectV2'
import { FormFieldWrapper } from 'src/pages/common/FormFields'
import { fields } from 'src/pages/News/labels'

import type { SelectValue } from 'oa-shared'

interface IProps {
  getCategories: () => Promise<any[]>
}

export const CategoryField = ({ getCategories }: IProps) => {
  const [categories, setCategories] = useState<SelectValue[]>([])

  const name = 'category'

  useEffect(() => {
    const initCategories = async () => {
      const categories = await getCategories()
      if (!categories) {
        return
      }

      const selectOptions = categories.map((category) => ({
        value: category.id.toString(),
        label: category.name,
      }))
      setCategories(selectOptions)
    }

    initCategories()
  }, [])

  return (
    <FormFieldWrapper htmlFor={name} text={fields.category.title}>
      <Field
        name={name}
        id={name}
        isEqual={(a, b) => !!a && a?.value === b?.value}
        render={({ input, ...rest }) => (
          <CategoriesSelectV2
            {...rest}
            categories={categories || []}
            isForm={true}
            onChange={input.onChange}
            value={input.value}
            placeholder={fields.category.placeholder as string}
          />
        )}
      />
    </FormFieldWrapper>
  )
}
