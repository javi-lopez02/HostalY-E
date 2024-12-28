import {
  Button,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { FC } from "react";
import { BiImage, BiMoney, BiRename } from "react-icons/bi";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ModalAddDrinks: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal backdrop={"opaque"} isOpen={isOpen} onClose={onClose} size="lg">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex items-end  space-x-2 gap-1 font-[sans-serif] ">
                <img src="./Logo.png" alt="Logo Hostal" className="w-10 h-8" />
                <h1 className="text-2xl font-bold">Agregar Merienda</h1>
              </ModalHeader>
              <ModalBody>
                <Form>
                  <div className="flex gap-4 w-full">
                    <div className="flex flex-col items-center w-full gap-4">
                      <img
                        className="size-16 bg-transparent"
                        src="./Logo.png"
                        alt="Imagen de Bebida"
                      />
                      <Input
                        autoFocus
                        name="image"
                        endContent={
                          <BiImage className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        label="Url Imagen"
                        placeholder="https://image.example"
                        variant="bordered"
                        labelPlacement="outside"
                      />
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                      <Input
                        autoFocus
                        name="name"
                        endContent={
                          <BiRename className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        label="Description"
                        placeholder="Entra la descripcion"
                        variant="bordered"
                        labelPlacement="outside"
                      />
                      <Input
                        endContent={
                          <BiMoney className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        label="Precio"
                        name="precio"
                        placeholder="Entra el precio"
                        variant="bordered"
                        labelPlacement="outside"
                      />
                    </div>
                  </div>

                  <div className="flex min-w-full justify-end mt-5 gap-3">
                    <Button color="danger" variant="light" onPress={onClose}>
                      Cancelar
                    </Button>
                    <Button color="primary" type="submit">
                      <span className=" font-semibold">Guardar</span>
                    </Button>
                  </div>
                </Form>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalAddDrinks;
