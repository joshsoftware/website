class Employees extends React.Component {
  render () {
    var createItem = (emp, index) => <Employee key={index} employee={emp} />;
    var createItemModal = (emp, index) => <ProfileModal key={index} employee={emp} />;

    return(
      <div>
        <div>{this.props.employees.map(createItem)}</div>
        <div>{this.props.employees.map(createItemModal)}</div>
      </div>
    );
  }
}

