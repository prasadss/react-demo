import * as React from "react";
import * as ReactDOM from "react-dom";
import { DateTimePicker } from "@progress/kendo-react-dateinputs";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
const itemList = [{ label: "Beetroot", selected: false },{ label: "Celery", selected: false },{ label: "Masala Chickpeas", selected: false },{ label: "Pasta Fusilli", selected: false },{ label: "Potato", selected: false },{ label: "Pumpkin", selected: false },{ label: "Soba", selected: false },{ label: "Sweet Potaotes", selected: false },{ label: "Black Olive", selected: false },{ label: "Jalapeno", selected: false },{ label: "Apple", selected: false }];
const App = () => {
  const max = new Date(2099, 2, 10, 12, 30);
  const min = new Date();
  const durationInMinutes = 30;
  const [list, setList] = React.useState(itemList);
  min.setMinutes(new Date().getMinutes() - durationInMinutes);
  function handleChange(i) {
    list[i].selected = !list[i].selected;
    setList([...list]);
  }
  const minimumItems = 6
  const error = list.filter((x) => x.selected).length > minimumItems;
  return (
    <div>
    <div>
      <DateTimePicker min={min} max={max} defaultValue={new Date()} />
      </div>
      <div>
      <br/>
        <FormControl error={error} required component="fieldset">
          <FormLabel component="legend">(Please choose any {minimumItems})</FormLabel>
          <FormGroup>
            {list.map((x, i) => {
              return (
                <FormControlLabel
                  key={i}
                  control={
                    <Checkbox
                      checked={x.selected}
                      onChange={() => handleChange(i)}
                      name={x.label}
                    />
                  }
                  label={x.label}
                />
              );
            })}
          </FormGroup>
        </FormControl>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("my-app"));
