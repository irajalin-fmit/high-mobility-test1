//import HMKit from 'hmkit';

/*
 * Before using HMKit, you'll have to initialise it
 * with a snippet from the Platform Workspace:
 *
 *   1. Sign in to the workspace
 *   2. Go to the LEARN section and click "Check Out Node.js"
 *   3. Follow the Getting Started instructions
 *
 * By the end of the tutorial you will have a Client Certificate
 * snippet on the "Client Certificate" tab of your Cloud App's
 * page, as well as an access token (to be pasted in the app() function below).
 * The Client Certificate should look something like this:
 *
 *   const hmkit = new HMKit(
 *     "dGVzdHPXjh7VTyjZt8XoNrK/hJDUSSj1i4VzQpIcUds08P9QzqpbWUKl46VVa0LC5AZJTxDr6FSVlOFiD8EKCSQVG1QXJe7umDAnRFzgYnUKHm5jA9LwayteCRB49ZyUPgpAOXJMsSAqXbouX9rDU6dQ+UCjn7oL6+ZDBbDA+X71LFhuR9XNuV8VBiV5T3gID8TFfME67Vp3",
 *     "uGGjPucN7SnP3BxV3a4VH6q0yy+oLbf3UM5+GtLLSSc="
 *   );
 *
 *
 */

// PASTE CLIENT CERTIFICATE SNIPPET HERE
import HMKit from 'hmkit';

const hmkit = new HMKit(
    "dGVzdMALM7FvDG8Uia9xsONyTGIaoEBtXkawQ+chtYUT7N6QAeiWe5KmYxG515+MHqdDoLQu5xwfIhnrO4sZx4GCc+enI0e04K8tGdaPcX5ELTc30IoLxd0mvqrgUgBhNa3Okpoe+2YdtNmCn2GoXJJngfMPJtvhqTzNBxYiTMlZrurKdjzaqans3FxRmXdNDj+AKRXcgu5u",
    "mZp5LUOpDN+yNy549GCcTIxWtfSMG6mo6uvbeGWU4fk="
);

async function app() {
  //const accessCertificate = await hmkit.downloadAccessCertificate('0e8dcab9-9557-4fdf-91c6-93329fb09bd4')
  const accessCertificate = await hmkit.downloadAccessCertificate('65c227a0-6bbb-44aa-972e-15ae5d51b043')
   
  try {
    const response = await hmkit.telematics.sendCommand(
      accessCertificate.getVehicleSerial(),
      hmkit.commands.CapabilitiesCommand.get()
    );

    console.log(accessCertificate.getVehicleSerial()); // result: D3B8B326DB8F4D6642
    console.log(hmkit.commands.CapabilitiesCommand.get()); // result: Command { command: [ 0, 16, 0 ] }
    console.log(response.bytes()); // result: Uint8Array [ 11, 0, 2, 1, 1, 0, 5, 1, 0, 2, 0, 0, 2, 0, 4, 1, 0, 1, 0, 3, 0, 4, 1, 0, 1, 5 ]
    console.log(response.parse()); // result: Uint8Array [ 11, 0, 2, 1, 1, 0, 5, 1, 0, 2, 0, 0, 2, 0, 4, 1, 0, 1, 0, 3, 0, 4, 1, 0, 1, 5 ]
  } catch (e) {
    console.log(e);
  }
}

// Run your app
app();
