import { UiFieldLabel } from "./ui-field-label";
import { UiFieldMessage } from "./ui-field-message";
import { UiFieldInput } from "./ui-field-input";

/**
 * @param {{
 *   label: string,             
 *   required: boolean,         
 *   helperText: string,     
 *   errorText: string,       
 *   className: string,
 * } & import('react').HTMLAttributes<HTMLInputElement>  } props
 * @returns {JSX.Element}
 */

export function UiTextField({
  label,
  required,
  helperText,
  errorText,
  className,
  ...inputProps
}) {
  return (
    <div className={className}>
      <UiFieldLabel label={label} required={required} />
      <UiFieldInput required={required} errorText={errorText} {...inputProps} />
      <UiFieldMessage helperText={helperText} errorText={errorText} />
    </div>
  );
}