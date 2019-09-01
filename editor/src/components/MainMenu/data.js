import { SEPARATOR, MENU_ITEM } from './constants';

const fileMenuData = {
  id: 'file-menu',
  kind: MENU_ITEM,
  text: 'File',
  onClick: (event, state) => {
    const { isVisible, setIsVisible } = state;
    if (event.currentTarget.id === 'file-menu') {
      setIsVisible(!isVisible);
    }
  },
  children: [
    {
      kind: MENU_ITEM,
      text: 'New...',
      context: 'Cmd+N',
    },
    {
      kind: MENU_ITEM,
      text: 'Open...',
      context: 'Cmd+0',
    },
    {
      id: 'recent-files-menu',
      kind: MENU_ITEM,
      text: 'Open Recent Files',
      context:'›',
      onClick: (event, state) => {
        event.stopPropagation();
        const { isVisible, setIsVisible } = state;
        if (event.currentTarget.id === 'recent-files-menu') {
          setIsVisible(!isVisible);
        }
      },
      children: [
        {
          kind: MENU_ITEM,
          text: 'Some old file.svg',
        },
      ],
    },
    {
      kind: SEPARATOR,
    },
    {
      kind: MENU_ITEM,
      text: 'Close',
      context: 'Cmd+W',
    },
    {
      kind: MENU_ITEM,
      text: 'Save',
      context: 'Cmd+S',
    },
    {
      kind: MENU_ITEM,
      text: 'Save as...',
      context: 'Shift+Cmd+S',
    },
    {
      kind: MENU_ITEM,
      text: 'Save for Web...',
      context: 'Option+Shift+Cmd+S',
    },
    {
      kind: MENU_ITEM,
      text: 'Revert',
      context: 'F12',
    },
    {
      kind: SEPARATOR,
    },
    {
      kind: MENU_ITEM,
      text: 'Document Setup',
      context: 'Option+Command+P',
    },
    {
      id: 'document-color-mode-menu',
      kind: MENU_ITEM,
      text: 'Document Color Mode',
      context:'›',
      onClick: (event, state) => {
        event.stopPropagation();
        const { isVisible, setIsVisible } = state;
        if (event.currentTarget.id === 'document-color-mode-menu') {
          setIsVisible(!isVisible);
        }
      },
      children: [
        {
          kind: MENU_ITEM,
          text: 'Some mode',
        },
      ],
    },
    {
      kind: MENU_ITEM,
      text: 'File Info...',
      context: 'Option+Shift+Cmd+I',
    },
    {
      kind: SEPARATOR,
    },
    {
      kind: MENU_ITEM,
      text: 'Print',
      context: 'Cmd+P',
    },
    {
      kind: SEPARATOR,
    },
    {
      kind: MENU_ITEM,
      text: 'Exit',
      context: 'Cmd+Q',
    },
  ],
};

const editMenuData = {
  kind: MENU_ITEM,
  text: 'Edit',
};

const objectMenuData = {
  kind: MENU_ITEM,
  text: 'Object',
};

const typeMenuData = {
  kind: MENU_ITEM,
  text: 'Type',
};

const selectMenuData = {
  kind: MENU_ITEM,
  text: 'Select',
};

const effectMenuData = {
  kind: MENU_ITEM,
  text: 'Effect',
};

const viewMenuData = {
  kind: MENU_ITEM,
  text: 'View',
};

const windowMenuData = {
  kind: MENU_ITEM,
  text: 'Window',
};

const helpMenuData = {
  kind: MENU_ITEM,
  text: 'Help',
};

export const mainMenuData = [
  fileMenuData,
  editMenuData,
  objectMenuData,
  typeMenuData,
  selectMenuData,
  effectMenuData,
  viewMenuData,
  windowMenuData,
  helpMenuData,
];
