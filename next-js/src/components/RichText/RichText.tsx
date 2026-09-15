import { JSX } from 'react';
import { RichText as ContentSdkRichText, RichTextField } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';

type RichTextProps = ComponentProps & {
  fields: {
    Text?: RichTextField;
  };
};

const RichText = (props: RichTextProps): JSX.Element => {
  return (
    <div
      className={`component rich-text ${props.params?.styles || ''}`.trim()}
      id={props.params?.RenderingIdentifier}
    >
      <div className="component-content">
        <ContentSdkRichText field={props.fields?.Text} />
      </div>
    </div>
  );
};

export default RichText;
