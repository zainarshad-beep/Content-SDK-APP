import { JSX } from 'react';
import { Text, RichText, TextField, RichTextField } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';

type EventsinfoProps = ComponentProps & {
  fields: {
    Title?: TextField;
    Description?: RichTextField;
    Date?: TextField;
    [key: string]: unknown;
  };
};

const Eventsinfo = (props: EventsinfoProps): JSX.Element => {
  return (
    <div
      className={`component events-info ${props.params?.styles || ''}`.trim()}
      id={props.params?.RenderingIdentifier}
    >
      <div className="component-content p-4 border rounded-lg shadow-sm my-2">
        {props.fields?.Title && (
          <h3 className="text-lg font-bold">
            <Text field={props.fields.Title} />
          </h3>
        )}
        {props.fields?.Date && (
          <p className="text-sm text-gray-500">
            <Text field={props.fields.Date} />
          </p>
        )}
        {props.fields?.Description && (
          <div className="text-gray-700 mt-2">
            <RichText field={props.fields.Description} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Eventsinfo;
