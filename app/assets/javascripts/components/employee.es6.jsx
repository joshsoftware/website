class Employee extends React.Component {
  render () {
    return (
      <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
        <EmployeePublicProfile public_profile={this.props.employee.public_profile} designation={this.props.employee.employee_detail.designation} />
      </div>
    );
  }
}

Employee.propTypes = {
  email: React.PropTypes.string.isRequired,
  public_profile: React.PropTypes.object.isRequired,
  employee_detail: React.PropTypes.object.isRequired
};

Employee.defaultProps = {
  email: "",
  public_profile: {},
  employee_detail: {}
};
