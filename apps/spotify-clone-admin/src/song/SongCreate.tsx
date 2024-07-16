import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AlbumTitle } from "../album/AlbumTitle";

export const SongCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <DateTimeInput label="releaseDate" source="releaseDate" />
        <NumberInput step={1} label="duration" source="duration" />
        <ReferenceInput source="album.id" reference="Album" label="Album">
          <SelectInput optionText={AlbumTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
