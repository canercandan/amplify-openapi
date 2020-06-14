import { FunctionTemplateParameters } from 'amplify-function-plugin-interface';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { getDestMap } from './utils';

const pathToTemplateFiles = path.join(__dirname, '..', 'templates', 'openapi-backend');

export const provider = async () => {
  const files = await promisify(fs.readdir)(pathToTemplateFiles);
  const templateParameters: FunctionTemplateParameters = {
    functionTemplate: {
      sourceRoot: pathToTemplateFiles,
      sourceFiles: files,
      defaultEditorFile: path.join('src', 'index.js'),
      destMap: getDestMap(files),
    },
  };
  return templateParameters;
};
