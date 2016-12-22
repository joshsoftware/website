class SocialLinks extends React.Component {
  render () {
    return (
      <div className="text-center">
        <div className="team-social-link">
          <SocialLink url={this.props.public_profile.twitter_handle} name="twitter" />
          <SocialLink url={this.props.public_profile.github_handle} name="github" />
          <SocialLink url={this.props.public_profile.facebook_url} name="facebook" />
          <SocialLink url={this.props.public_profile.linkedin_url} name="linkedin" />
          <SocialLink url={this.props.public_profile.blog_url} name="rss" />
        </div>
      </div>
    );
  }
}

SocialLinks.propTypes = {
  publicProfile: React.PropTypes.object
};

SocialLinks.defaultProps = { url: "", name: "" };
