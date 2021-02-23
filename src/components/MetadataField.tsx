import * as React from 'react';
import './sass/MetadataField.scss';

type metaField = {
	idx: number;
	type: string;
	value: any;
};

export const MetadataField = ({idx, type, value}:metaField) => {
	return (<div className="metadata-wrapper">
		<p className="data-idx">{idx}</p>
		<p className="data-type">{type}</p>
		<p className="data-value">{value}</p>
	</div>);
}
