import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AlbumTitle } from "../album/AlbumTitle";

export const ArtistCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
