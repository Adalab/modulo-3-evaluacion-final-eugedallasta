import "../stylesheets/components/Filter.scss";

function FilterByName(props) {
  const handleChange = (ev) => {
    props.handleInputChange({
      key: "name",
      value: ev.target.value,
    });
  };

  return (
    <label className="main__form-label">
      Filter by Name
      <input
        className="main__form-input"
        placeholder="Example: Rick Sanchez"
        onChange={handleChange}
        type="text"
        value={props.name}
      />
    </label>
  );
}

export default FilterByName;
