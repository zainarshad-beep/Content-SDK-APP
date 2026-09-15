import { JSX } from 'react';
import { Text, RichText, TextField, RichTextField } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';

type InfoCardProps = ComponentProps & {
  fields: {
    Title?: TextField;
    Description?: RichTextField;
  };
};

const InfoCard = (props: InfoCardProps): JSX.Element => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4 my-4 border border-gray-200">
      <h2 className="text-xl font-bold text-black">
        <Text field={props.fields?.Title} />
      </h2>
      <div className="text-gray-600">
        <RichText field={props.fields?.Description} />
      </div>
    </div>
  );
};

export default InfoCard;