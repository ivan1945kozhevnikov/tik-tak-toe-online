import { UiFieldLabel } from "./ui-field-label";
import { UiFieldMessage } from "./ui-field-message";
import { UiSelect } from "./ui-select";

/**
 * @param {Object} props
 * @param {string} props.label
 * @param {boolean} props.required
 * @param {string} props.helperText
 * @param {string} props.errorText
 * @param {string} props.className
 * @param {string[]} props.options
 * @returns {JSX.Element}
 */

export function UiSelectField({
  label,
  required,
  helperText,
  errorText,
  className,
  options,
}) {
  return (
    <div className={className}>
      <UiFieldLabel label={label} required={required} />
      <UiSelect className="mt-1" options={options} />
      <UiFieldMessage helperText={helperText} errorText={errorText} />
    </div>
  );
}
