import { JSX } from 'react';
import {
  Image as ContentSdkImage,
  ImageField,
  LinkField,
  Link as ContentSdkLink,
  TextField,
  Text,
} from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';

type ImageProps = ComponentProps & {
  fields: {
    Image?: ImageField;
    ImageCaption?: TextField;
    TargetUrl?: LinkField;
  };
};

const Image = (props: ImageProps): JSX.Element => {
  const imageField = props.fields?.Image;
  const imageCaption = props.fields?.ImageCaption;
  const targetUrl = props.fields?.TargetUrl;

  const imageElement = imageField ? (
    <ContentSdkImage
      field={imageField}
      alt={imageField?.value?.alt ?? ''}
    />
  ) : null;

  return (
    <div
      className={`component image ${props.params?.styles || ''}`.trim()}
      id={props.params?.RenderingIdentifier}
    >
      <div className="component-content">
        {targetUrl?.value?.href ? (
          <ContentSdkLink field={targetUrl}>{imageElement}</ContentSdkLink>
        ) : (
          imageElement
        )}
        {imageCaption && (
          <span className="image-caption">
            <Text field={imageCaption} />
          </span>
        )}
      </div>
    </div>
  );
};

export default Image;
