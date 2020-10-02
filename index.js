import React from 'react';
import TestRenderer from 'react-test-renderer';

function Link(props) {
    return <a href={props.page}>{props.children}</a>;
}

const testRenderer = TestRenderer.create(
    <Link page="https://www.facebook.com/">Facebook</Link>
);

let json = JSON.stringify(testRenderer.toJSON());

print_log(json);