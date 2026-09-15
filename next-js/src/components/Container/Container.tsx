import { JSX } from 'react';
import { Placeholder } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';

const Container = (props: ComponentProps): JSX.Element => {
  const phKey =
    props.params?.DynamicPlaceholderId
      ? `container-${props.params.DynamicPlaceholderId}`
      : Object.keys(props.rendering?.placeholders || {})[0] || 'container';

  return (
    <div
      className={`component container ${props.params?.styles || ''}`.trim()}
      id={props.params?.RenderingIdentifier}
    >
      <div className="component-content">
        <Placeholder name={phKey} rendering={props.rendering} />
      </div>
    </div>
  );
};

export default Container;
