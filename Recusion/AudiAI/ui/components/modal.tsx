import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";

import { VideoOptions } from "@/config/options";

export function ConfirmModal({
  confirmModal,
  usedDefaultOptions,
  advancedOptions,
  renderVideo,
}: {
  confirmModal: ReturnType<typeof useDisclosure>;
  usedDefaultOptions: boolean;
  advancedOptions: VideoOptions | null;
  renderVideo: () => void;
}) {
  return (
    <Modal
      isOpen={confirmModal.isOpen}
      size="2xl"
      onOpenChange={confirmModal.onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Do you want to render the video?
            </ModalHeader>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                No
              </Button>
              <Button
                color="primary"
                onPress={() => {
                  onClose();
                  renderVideo();
                }}
              >
                Yes
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export const TableAdvancedOptions = ({
  advancedOptions,
}: {
  advancedOptions: VideoOptions | null;
}) => {
  if (!advancedOptions) return null;

  const mainRows = Object.entries(advancedOptions)
    .filter(([_, value]) => typeof value !== "object")
    .map(([key, value]) => {
      if (typeof value === "boolean") {
        return { key, name: key, value: value ? "true" : "false" };
      }

      return { key, name: key, value };
    });

  const internalRows = advancedOptions?.internalOptions
    ? Object.entries(advancedOptions.internalOptions).map(([key, value]) => {
        return { key, name: key, value: value.toString() };
      })
    : [];

  const subtitleRows = advancedOptions?.subtitleOptions
    ? Object.entries(advancedOptions.subtitleOptions).map(([key, value]) => {
        return { key, name: key, value: value ? value.toString() : "Default" };
      })
    : [];

  const imageOptionRows = advancedOptions?.imageOptions
    ? Object.entries(advancedOptions.imageOptions).map(([key, value]) => {
        return { key, name: key, value: value ? value.toString() : "Default" };
      })
    : [];

  const ttsOptionsRows = advancedOptions?.ttsOptions
    ? Object.entries(advancedOptions.ttsOptions).map(([key, value]) => {
        return { key, name: key, value: value ? value.toString() : "Default" };
      })
    : [];

  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "value",
      label: "VALUE",
    },
  ];

  return (
    <div>
      <Accordion>
        <AccordionItem  title="Main Options">
          <Table aria-label="Main Options" shadow="lg">
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody items={mainRows}>
              {(item) => (
                <TableRow key={item.key}>
                  {(columnKey) => (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </AccordionItem>
        <AccordionItem  title="Subtitle Options">
          <Table aria-label="Subtitle Options" shadow="lg">
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody items={subtitleRows}>
              {(item) => (
                <TableRow key={item.key}>
                  {(columnKey) => (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </AccordionItem>
        <AccordionItem  title="TTS Options">
          <Table aria-label="TTS Options" shadow="lg">
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody items={ttsOptionsRows}>
              {(item) => (
                <TableRow key={item.key}>
                  {(columnKey) => (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </AccordionItem>
        <AccordionItem  title="Image Options">
          <Table aria-label="Image Options" shadow="lg">
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody items={imageOptionRows}>
              {(item) => (
                <TableRow key={item.key}>
                  {(columnKey) => (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </AccordionItem>
        <AccordionItem  title="Internal Options">
          <Table aria-label="Internal Advanced Options" shadow="lg">
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody items={internalRows}>
              {(item) => (
                <TableRow key={item.key}>
                  {(columnKey) => (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
