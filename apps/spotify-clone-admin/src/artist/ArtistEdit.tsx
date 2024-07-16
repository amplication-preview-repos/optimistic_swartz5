import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AlbumTitle } from "../album/AlbumTitle";

export const ArtistEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="genre" source="genre" />
        <TextInput label="category" source="category" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="albums"
          reference="Album"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AlbumTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
