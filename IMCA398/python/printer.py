# PYIPP (from https://github.com/ctalkington/python-ipp / https://pypi.org/project/pyipp/)
import asyncio
from pyipp import IPP, Printer
async def main():
    """Show example of connecting to your IPP print server."""
    # async with IPP("ipps://EPSON123456.local:631/ipp/print") as ipp:
    # async with IPP("http://BRN008077E90263.local.:631/duerqxesz5090") as ipp:
    # async with IPP("ipps://BRN008077E90263.local.:631/duerqxesz5090") as ipp:
    # async with IPP("http://HP789327.local.:631/ipp/printer") as ipp:
    # async with IPP("ipps://HP789327.local.:631/ipp/printer") as ipp:
    async with IPP("ipp://HP789327.local.:631/ipp/printer") as ipp: # WORKS!!!
    # async with IPP("ipp://BRN008077E90263.local.:631/duerqxesz5090") as ipp:
    # async with IPP("ipp://192.168.037.227.local.:631/duerqxesz5090") as ipp:
        printer: Printer = await ipp.printer()
        print(printer)
if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())
