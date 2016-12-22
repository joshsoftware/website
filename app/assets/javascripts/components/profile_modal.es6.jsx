class ProfileModal extends React.Component {
  render () {
    return (
      <div className="modal fade" aria-hidden="true" aria-labelledby={this.props.employee.public_profile.name} role="dialog" tabIndex="-1" id={this.props.employee.public_profile.modal_name+"-modal"}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body well">
              <button className="close" aria-hidden="true" data-dismiss="modal" type="button">&times;</button>
              <div className="container text-center">
                <EmployeePublicProfile public_profile={this.props.employee.public_profile} designation={this.props.employee.employee_detail.designation} />
                <div className="container">
                  <p dangerouslySetInnerHTML={{__html: this.props.employee.employee_detail.description}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileModal.propTypes = {
  email: React.PropTypes.string,
  public_profile: React.PropTypes.object,
  employee_detail: React.PropTypes.object
};
