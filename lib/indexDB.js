// indexedDB.js

export const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open("my_database", 1);

    request.onerror = (event) => {
      reject("Failed to open IndexedDB:", event.target.error);
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      // Create object store for documents
      const documentsStore = db.createObjectStore("documents", {
        keyPath: "id",
        autoIncrement: true,
      });
      documentsStore.createIndex("name", "name", { unique: false });

      // Create object store for formData
      const formDataStore = db.createObjectStore("formData", {
        keyPath: "id",
        autoIncrement: true,
      });
      formDataStore.createIndex("name", "name", { unique: false });
    };
  });
};

export const saveDocumentData = (documents) => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = await openDB();
      const transaction = db.transaction("documents", "readwrite");
      const objectStore = transaction.objectStore("documents");
      const request = objectStore.add(documents);

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = (event) => {
        reject("Failed to save document data:", event.target.error);
      };
    } catch (error) {
      reject(error);
    }
  });
};

// export const saveFormData = (formData) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const db = await openDB();
//       const transaction = db.transaction("formData", "readwrite");
//       const objectStore = transaction.objectStore("formData");
//       const request = objectStore.add({ formData });

//       request.onsuccess = () => {
//         resolve();
//       };

//       request.onerror = (event) => {
//         reject("Failed to save form data:", event.target.error);
//       };
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// indexedDB.js

// export const getFormData = () => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const db = await openDB();
//       const transaction = db.transaction("formData", "readonly");
//       const objectStore = transaction.objectStore("formData");
//       const request = objectStore.getAll();

//       request.onsuccess = (event) => {
//         const formData = event.target.result;
//         resolve(formData);
//       };

//       request.onerror = (event) => {
//         reject("Failed to get formData:", event.target.error);
//       };
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

export const getDocuments = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = await openDB();
      const transaction = db.transaction("documents", "readonly");
      const objectStore = transaction.objectStore("documents");
      const request = objectStore.getAll();

      request.onsuccess = (event) => {
        const documents = event.target.result;
        resolve(documents);
      };

      request.onerror = (event) => {
        reject("Failed to get documents:", event.target.error);
      };
    } catch (error) {
      reject(error);
    }
  });
};

// indexedDB.js

export const deleteAllDocuments = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = await openDB();
      const transaction = db.transaction("documents", "readwrite");
      const objectStore = transaction.objectStore("documents");

      // Clear the entire object store
      const request = objectStore.clear();

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = (event) => {
        reject("Failed to delete all documents:", event.target.error);
      };
    } catch (error) {
      reject(error);
    }
  });
};

export const deleteSingleDocument = (itemId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = await openDB();
      const transaction = db.transaction("documents", "readwrite");
      const objectStore = transaction.objectStore("documents");

      // Retrieve the document containing the array
      const request = objectStore.getAll();

      request.onsuccess = () => {
        const documents = request.result;

        // Iterate through all documents and find the item in the "data" array
        for (const document of documents) {
          const index = document.data.findIndex((item) => item.name === itemId);

          if (index !== -1) {
            // Remove the item from the array
            document.data.splice(index, 1);

            // Update the object in IndexedDB with the modified array
            const updateRequest = objectStore.put(document);
            updateRequest.onsuccess = () => {
              resolve();
            };
            updateRequest.onerror = (event) => {
              reject("Failed to update document:", event.target.error);
            };
            return; // Exit the loop after updating the first matching document
          }
        }

        // Reject if item is not found in any document
        reject("Item not found in any document data array");
      };

      request.onerror = (event) => {
        reject("Failed to retrieve documents:", event.target.error);
      };
    } catch (error) {
      reject(error);
    }
  });
};

// indexedDB.js

export const updateSingleDocument = (itemId, newData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = await openDB();
      const transaction = db.transaction("documents", "readwrite");
      const objectStore = transaction.objectStore("documents");

      // Retrieve the document containing the array
      const request = objectStore.getAll();

      request.onsuccess = () => {
        const documents = request.result;

        // Iterate through all documents and find the item in the "data" array
        // for (const document of documents) {
        const document = documents.find((doc) => doc.name === itemId);
        // const index = document.findIndex((item) => item.name === itemId);

        // if (index !== -1) {
        if (document) {
          const updatedItem = [...document.data, ...newData];
          // Update the item with the merged data
          document.data = updatedItem;

          // Update the object in IndexedDB with the modified array
          const updateRequest = objectStore.put(document);
          updateRequest.onsuccess = () => {
            resolve();
          };
          updateRequest.onerror = (event) => {
            reject("Failed to update document:", event.target.error);
          };
          return; // Exit the loop after updating the first matching document
          //   }
          // }
        }

        // Reject if item is not found in any document
        reject("Item not found in any document data array");
      };

      request.onerror = (event) => {
        reject("Failed to retrieve documents:", event.target.error);
      };
    } catch (error) {
      reject(error);
    }
  });
};
