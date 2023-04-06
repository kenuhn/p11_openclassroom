import React from 'react';

const Hashtag = (props) => {
    const tags = props.tags
    
    const elTags = tags.map((item) => {
       return  <div key={item} className="tag_content">{item}</div>
    })
    
    return (
        <div className="tag">
            {elTags}
        </div>
    );
};

export default Hashtag;