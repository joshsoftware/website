class EmployeesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employees: [] };
    this.fetchEmployees();
  }

  fetchEmployees() {
    $.getJSON(this.props.employeesPath, (data) => {
      this.setState({ employees: data });
      $('#loading_team').addClass('hide')
    });
  }

  render () {
    return <Employees employees={this.state.employees} />;
  }
}

