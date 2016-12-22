class EmployeePublicProfile extends React.Component {
  render () {
    return(
      <div className="person text-center">
        <a href="#">
          <Avatar url={this.props.public_profile.image_medium_url} name={this.props.public_profile.name} data_toggle="modal" modal_name={this.props.public_profile.modal_name} />
        </a>
        <div className="person-info text-center">
          <h4>{this.props.public_profile.name}</h4>
          <p className="text-muted">{this.props.designation}</p>
        </div>
        <SocialLinks public_profile={this.props.public_profile} />
      </div>
    );
  }
}

