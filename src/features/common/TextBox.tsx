interface TextBoxProps {
    label: string;
    placeholder: string;
    type: string;
    id: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
export const TextBox = (props: TextBoxProps) => {
    return (
        <div>
            <label htmlFor={props.id} className="block text-sm font-medium leading-6 text-gray-900">
                {props.label}
            </label>
            <div className="mt-2">
                <input autoComplete="" type={props.type} name={props.name} id={props.id} className="block w-full rounded-md border-0 py-1.5 px-2 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400" placeholder={props.placeholder} value={props.value} onChange={props.onChange} onKeyDown={props.onKeyDown} />
            </div>
        </div>
    );
};
