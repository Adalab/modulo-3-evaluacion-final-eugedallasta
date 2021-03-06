import "../stylesheets/components/Filter.scss";

const FilterByGender = (props) => {
  const handleChange = (ev) => {
    props.handleInputChange({
      key: "gender",
      value: ev.target.value,
    });
  };
  return (
    <label className="main__form-label" htmlFor="gender">
      and Gender
      <br />
      <select name="gender" id="gender" onChange={handleChange}>
        <option value="All">All</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
    </label>
  );
};
export default FilterByGender;
