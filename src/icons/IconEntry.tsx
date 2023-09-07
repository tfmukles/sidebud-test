import React, {FC, SVGProps} from 'react';
import Key from './key.svg';
import Trash from './trash.svg';

export const iconsMap: Map<string, FC<SVGProps<SVGSVGElement>>> = new Map();
iconsMap.set('key', Key);
iconsMap.set('trash', Trash);

interface IconEntryProps {
    iconKey: string;
    className?: string;
}

export function IconEntry(props: IconEntryProps) {
    const {iconKey, className} = props;
    const Icon: React.FC<React.SVGProps<SVGSVGElement>> | undefined = iconsMap.get(iconKey);
    if (Icon) {
        return (<Icon className={className} />);
    }
    return null;
}
