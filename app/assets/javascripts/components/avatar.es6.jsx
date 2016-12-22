class Avatar extends React.Component {
  getDataTarget() {
    return this.props.data_toggle == "modal" && this.props.modal_name ? ("#"+this.props.modal_name+"-modal") : "#"
  }

  render () {
    return (
      <img src={(intranet_url+this.props.url) || "placeholder.gif"} alt={this.props.name} title={this.props.name} data-toggle={this.props.data_toggle} data-target={this.getDataTarget()} />
    );
  }
}

Avatar.propTypes = {
  url: React.PropTypes.string,
  name: React.PropTypes.string
};
