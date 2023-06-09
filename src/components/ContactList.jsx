import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { ContactCard } from "./ContactCard";

const getAllContacts = () => {
  return fetch(
    "https://assets.breatheco.de/apis/fake/contact/agenda/agenda_2021"
  ).then((response) => response.json());
};

export function ContactList() {
  const { data, isLoading, error } = useQuery(["contacts"], getAllContacts);

  return (
    <div>
      {isLoading && <div>Loading contacts</div>}

      {error && <div>Error Loading contacts</div>}

      {data &&
        data.map((contact, index) => {
          return <ContactCard key={index} contact={contact} />;
        })}

        <Link href="/add" className="btn  btn-primary mt-2">
            Add contact
        </Link>
    </div>
  );
}
