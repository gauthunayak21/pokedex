import './SearchBar.scss';
interface SearchBarProps {
    onInputChange: (inputValue: string) => void;
}

const SearchBar = ( { onInputChange } : SearchBarProps ) => {
    return <>
        <input type="text" placeholder="Search Pokemon" onChange={($event) => onInputChange($event.target.value)}></input>
    </>

}

export default SearchBar;