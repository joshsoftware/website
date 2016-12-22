class SocialLink extends React.Component {
  getHrefUrl() {
    if(this.props.name == "twitter") {
      return "http://twitter.com/" + this.props.url;
    } else if (this.props.name == "github") {
      return "http://github.com/" + this.props.url;
    } else if (this.props.name == "rss") {
      let url = this.props.url;
      if (!url.match(/^[a-zA-Z]+:\/\//)) {
            url = 'http://' + url;
      }
      return url
    } else {
      return this.props.url;
    }
  }

  getAltName() {
    let name = SocialLink.altNames[this.props.name];
    return (this.props.name == "twitter" || this.props.name == "github") ? (name + this.props.url) : name;
  }

  render () {
    if(this.props.url) {
      return (
        <a href={this.getHrefUrl(this.props.url)} alt={this.getAltName()} target="_blank">
          <i className={"icon-"+this.props.name} />
        </a>
      );
    }
    return null;
  }
}

SocialLink.propTypes = {
  url: React.PropTypes.string,
  name: React.PropTypes.string
};

SocialLink.altNames = {
  twitter: "Twitter handle ",
  github: "Github handle ",
  facebook: "Facebook",
  linkedin: "LinkedIn",
  rss: "Blog"
};
