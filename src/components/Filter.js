import FilterByName from './FilterByName';
import FilterByGender from "./FilterByGender";

const Filter = (props) => {




    return (
      <form>
        <FilterByName handleInputChange={props.handleInputChange} />
        <FilterByGender handleInputChange={props.handleInputChange} />
      </form>
    );
}






export default Filter;