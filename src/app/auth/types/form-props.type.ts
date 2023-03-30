import { Control, FieldErrors, FieldValues, UseFormHandleSubmit, UseFormReset } from "react-hook-form"

export type FormPropsType = {
  title: string,
  nameBtn: string,
  handleSubmitForm: (data: FieldValues) => void,
  isSignIn: boolean,
  handleSubmit: UseFormHandleSubmit<FieldValues>,
  control: Control<any>,
  errors: FieldErrors<FieldValues>,
}
