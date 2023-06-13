import "./FilterForm.scss";
import { Component, Dispatch, SetStateAction } from "react";

interface FilterFormProps {
  filters: string[];
  filtersSetter: Dispatch<SetStateAction<string[]>>;
}

class FilterForm extends Component<FilterFormProps> {
  handleChange = (filter: string) => {
    const { filters, filtersSetter } = this.props;
    if (filters.includes(filter)) {
      filtersSetter(filters.filter((f) => f !== filter));
    } else {
      filtersSetter([...filters, filter]);
    }
  };

  render() {
    const { filters } = this.props;

    return (
      <div className="filterForm">
        <form>
          <div className="field">
            <label htmlFor="red">czerwony &gt; 50%</label>
            <input
              type="checkbox"
              id="red"
              name="red"
              checked={filters.includes("red")}
              onChange={() => this.handleChange("red")}
            />
          </div>
          <div className="field">
            <label htmlFor="green">zielony &gt; 50%</label>
            <input
              type="checkbox"
              id="green"
              name="green"
              checked={filters.includes("green")}
              onChange={() => this.handleChange("green")}
            />
          </div>
          <div className="field">
            <label htmlFor="blue">niebieski &gt; 50%</label>
            <input
              type="checkbox"
              id="blue"
              name="blue"
              checked={filters.includes("blue")}
              onChange={() => this.handleChange("blue")}
            />
          </div>
          <div className="field">
            <label htmlFor="saturation">saturacja &gt; 50%</label>
            <input
              type="checkbox"
              id="saturation"
              name="saturation"
              checked={filters.includes("saturation")}
              onChange={() => this.handleChange("saturation")}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default FilterForm;
