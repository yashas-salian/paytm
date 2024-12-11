export function Button({label, onClick}){
    return <button onClick={onClick} type="button" class="bg-black text-white hover:bg-black-700 text-white font-bold py-2 px-4 rounded-full">
    {label}
  </button>
} 