import type {
  AdmonitionType,
  BlockquoteType,
  BreakType,
  CodeType,
  DefinitionType,
  DeleteType,
  EmphasisType,
  FootnoteDefinitionType,
  FootnoteReferenceType,
  FootnoteType,
  HeadingType,
  IAdmonition,
  IBlockquote,
  IBreak,
  ICode,
  IDefinition,
  IDelete,
  IEmphasis,
  IFootnote,
  IFootnoteDefinition,
  IFootnoteReference,
  IHeading,
  IImage,
  IImageReference,
  IInlineCode,
  IInlineMath,
  ILink,
  ILinkReference,
  IList,
  IListItem,
  IMath,
  IParagraph,
  IStrong,
  ITable,
  IText,
  IThematicBreak,
  IYastNode,
  ImageReferenceType,
  ImageType,
  InlineCodeType,
  InlineMathType,
  LinkReferenceType,
  LinkType,
  ListItemType,
  ListType,
  MathType,
  ParagraphType,
  StrongType,
  TableType,
  TextType,
  ThematicBreakType,
} from '@yozora/ast'
import type React from 'react'

/**
 * Renderer for Yozora markdown AST node.
 */
export type ITokenRenderer<T extends IYastNode = IYastNode> =
  React.ComponentType<T>

/**
 * Renderer map.
 */
export interface ITokenRendererMap {
  [AdmonitionType]: ITokenRenderer<IAdmonition>
  [BlockquoteType]: ITokenRenderer<IBlockquote>
  [BreakType]: ITokenRenderer<IBreak>
  [CodeType]: ITokenRenderer<ICode>
  [DefinitionType]: ITokenRenderer<IDefinition>
  [DeleteType]: ITokenRenderer<IDelete>
  [EmphasisType]: ITokenRenderer<IEmphasis>
  [FootnoteType]: ITokenRenderer<IFootnote>
  [FootnoteReferenceType]: ITokenRenderer<IFootnoteReference>
  [FootnoteDefinitionType]: ITokenRenderer<IFootnoteDefinition>
  [HeadingType]: ITokenRenderer<IHeading>
  [ImageType]: ITokenRenderer<IImage>
  [ImageReferenceType]: ITokenRenderer<IImageReference>
  [InlineCodeType]: ITokenRenderer<IInlineCode>
  [InlineMathType]: ITokenRenderer<IInlineMath>
  [LinkType]: ITokenRenderer<ILink>
  [LinkReferenceType]: ITokenRenderer<ILinkReference>
  [ListType]: ITokenRenderer<IList>
  [ListItemType]: ITokenRenderer<IListItem>
  [MathType]: ITokenRenderer<IMath>
  [ParagraphType]: ITokenRenderer<IParagraph>
  [StrongType]: ITokenRenderer<IStrong>
  [TableType]: ITokenRenderer<ITable>
  [TextType]: ITokenRenderer<IText>
  [ThematicBreakType]: ITokenRenderer<IThematicBreak>
  _fallback: ITokenRenderer
  [key: string]: ITokenRenderer<IYastNode & any>
}

/**
 * Preview image item.
 */
export interface IPreviewImageItem {
  /**
   * Image url
   */
  src: string
  /**
   * Alt of image.
   */
  alt: string
}

/**
 * Api for managing preview images.
 */
export interface IPreviewImageApi {
  /**
   * Add a preview image item.
   * @param item
   * @returns callback funcs to toggle the visible state of images.
   */
  addPreviewImage(item: IPreviewImageItem): (visible: boolean) => void
}

/**
 * Props of ImageViewer
 * @see https://github.com/infeng/react-viewer#props
 */
export interface IImageViewerProps {
  /**
   * Whether if the image viewer is visible.
   */
  visible: boolean
  /**
   * Image items.
   */
  images: IPreviewImageItem[]
  /**
   * Current activated index of image.
   */
  activeIndex?: number
  /**
   * Callback functions when close the image viewer.
   */
  onClose(): void
  /**
   * callback function when mask is clicked
   */
  onMaskClick(): void
}
