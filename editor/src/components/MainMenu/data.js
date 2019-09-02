import { SEPARATOR, MENU, MENU_ITEM } from './constants';

const fileMenuData = {
  kind: MENU_ITEM,
  props: {
    id: 'file-menu',
    text: 'File',
    onClick: (event, state) => {
      const { isVisible, setIsVisible } = state;
      if (event.currentTarget.id === 'file-menu') {
        setIsVisible(!isVisible);
      }
    },
  },
  children: [
    {
      kind: MENU,
      children: [
      {
        kind: MENU_ITEM,
        props: {
          text: 'New...',
          context: 'Cmd+N',
        },
      },
      {
        kind: MENU_ITEM,
        props: {
          text: 'Open...',
          context: 'Cmd+0',
        },
      },
      {
        kind: MENU_ITEM,
        props: {
          id: 'recent-files-menu',
          text: 'Open Recent Files',
          context:'›',
          onClick: (event, state) => {
            event.stopPropagation();
            const { isVisible, setIsVisible } = state;
            if (event.currentTarget.id === 'recent-files-menu') {
              setIsVisible(!isVisible);
            }
          },
        },
        children: [
          {
            kind: MENU,
            children: [
              {
                kind: MENU_ITEM,
                props: {
                  text: 'Some old file.svg',
                },
              },
            ],
          },
        ],
      },
      {
        kind: SEPARATOR,
      },
      {
        kind: MENU_ITEM,
        props: {
          text: 'Close',
          context: 'Cmd+W',
        },
      },
      {
        kind: MENU_ITEM,
        props: {
          text: 'Save',
          context: 'Cmd+S',
        },
      },
      {
        kind: MENU_ITEM,
        props: {
          text: 'Save as...',
          context: 'Shift+Cmd+S',
        },
      },
      {
        kind: MENU_ITEM,
        props: {
          text: 'Save for Web...',
          context: 'Option+Shift+Cmd+S',
        },
      },
      {
        kind: MENU_ITEM,
        props: {
          text: 'Revert',
          context: 'F12',
        },
      },
      {
        kind: SEPARATOR,
      },
      {
        kind: MENU_ITEM,
        props: {
          text: 'Document Setup',
          context: 'Option+Command+P',
        },
      },
      {
        kind: MENU_ITEM,
        props: {
          id: 'document-color-mode-menu',
          text: 'Document Color Mode',
          context:'›',
          onClick: (event, state) => {
            event.stopPropagation();
            const { isVisible, setIsVisible } = state;
            if (event.currentTarget.id === 'document-color-mode-menu') {
              setIsVisible(!isVisible);
            }
          },
        },
        children: [
          {
            kind: MENU,
            children: [
              {
                kind: MENU_ITEM,
                props: {
                  text: 'Some mode',
                },
              },
            ],
          },
        ],
      },
      {
        kind: MENU_ITEM,
        props: {
          text: 'File Info...',
          context: 'Option+Shift+Cmd+I',
        },
      },
      {
        kind: SEPARATOR,
      },
      {
        kind: MENU_ITEM,
        props: {
          text: 'Print',
          context: 'Cmd+P',
        },
      },
      {
        kind: SEPARATOR,
      },
      {
        kind: MENU_ITEM,
        props: {
          text: 'Exit',
          context: 'Cmd+Q',
        },
      },
      ],
    },
  ],
};

const editMenuData = {
  kind: MENU_ITEM,
  props: {
    text: 'Edit',
  },
};

const objectMenuData = {
  kind: MENU_ITEM,
  props: {
    text: 'Object',
  },
};

const typeMenuData = {
  kind: MENU_ITEM,
  props: {
    text: 'Type',
  },
};

const selectMenuData = {
  kind: MENU_ITEM,
  props: {
    text: 'Select',
  },
};

const effectMenuData = {
  kind: MENU_ITEM,
  props: {
    text: 'Effect',
  },
};

const viewMenuData = {
  kind: MENU_ITEM,
  props: {
    text: 'View',
  },
};

const windowMenuData = {
  kind: MENU_ITEM,
  props: {
    text: 'Window',
  },
};

const helpMenuData = {
  kind: MENU_ITEM,
  props: {
    text: 'Help',
  },
};

export const mainMenuData = {
  kind: MENU,
  children: [
    fileMenuData,
    editMenuData,
    objectMenuData,
    typeMenuData,
    selectMenuData,
    effectMenuData,
    viewMenuData,
    windowMenuData,
    helpMenuData,
  ],
};
