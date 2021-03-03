import "../stylesheets/components/Filter.scss";

function FilterByName(props) {
  const handleChange = (ev) => {
    props.handleInputChange({
      key: "name",
      value: ev.target.value,
    });
  };

  return (
    <label>
      <input
        // className='add class'
        placeholder="Ej. Rick Sanchez"
        onChange={handleChange}
        type="text"
        value={props.name}
      />
    </label>
  );
}

export default FilterByName;
