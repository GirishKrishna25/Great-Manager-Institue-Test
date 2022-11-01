import React from 'react';
import PropTypes from 'prop-types';

const YoutubeEmbed = ({ link }) => (
  <div className="video-responsive">
    <iframe
      width="300"
      height="200"
      src={link}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
