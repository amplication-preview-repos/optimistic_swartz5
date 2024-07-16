import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AlbumTitle } from "../album/AlbumTitle";

export const SongEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <DateTimeInput label="releaseDate" source="releaseDate" />
        <NumberInput step={1} label="duration" source="duration" />
        <ReferenceInput source="album.id" reference="Album" label="Album">
          <SelectInput optionText={AlbumTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
