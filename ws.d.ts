declare const rk: (key: string, ctx?: string | number, num?: number) => string;

declare module '*' {
    const module: {
        new (...args)
        [propName: string]: any
    };
    export = module;
}

declare module 'tmpl!*' {
    const tmpl: (...args) => string;
    export = tmpl;
}

declare module 'optional!*' {
    const module: {
        new (...args)
        [propName: string]: any
    } | null;
    export = module;
}

declare module 'Core/core-extend' {
    export const superclass: object;

    export function extend(options: object): object;
}

declare module 'Core/Abstract.compatible' {
    class AbstractCompatible {
        _publish(eventName: string | string[]);

        _notify(eventName: string, ...args: any[]);

        subscribeTo(control: any, event: string, handler: (e: Event, ...args: any[]) => void);

        once(event: string, handler: (e: Event, ...args: any[]) => void);
    }

    export = AbstractCompatible
}

declare module 'Lib/Control/AreaAbstract/AreaAbstract.compatible' {
    class AreaAbstractCompatible {
        getChildControls(): object[];

        getChildControlByName(name: string): object;
    }

    export = AreaAbstractCompatible
}

declare module 'Core/Context' {
    class Context {
        getValue(name: string): any;

        setValue(name: string, value: any);

        setValue(obj: object);

        setValueSelf(name: string, value: any);

        setValueSelf(obj: object);
    }

    export = Context
}


declare module 'Lib/Control/Control.compatible' {
    import Context = require('Core/Context');

    class ControlCompatible {
        _context: object;

        getLinkedContext(): Context;

        sendCommand(name: string, ...args: any[]);
    }

    export = ControlCompatible
}

declare module 'Core/Deferred' {
    class Deferred {
        static success(...args: any[]): Deferred;

        static fail(...args): Deferred;

        callback(...args);

        errback(...args);

        addCallback(fn: (...args) => any): Deferred;

        addErrback(fn: (...args) => any): Deferred;

        addBoth(fn: (...args) => any): Deferred;

        dependOn(deferred: Deferred): Deferred;
    }

    export = Deferred
}

declare module 'Core/EventBus' {
    class Channel {
        notify(eventName, ...params);
    }

    class EventBus {
        static channel(name: string): Channel;
    }

    export = EventBus
}

declare module 'WS.Data/Entity/Record' {
    class Record {
        get(key: string): any;

        set(key: string, value: any);

        addField(options: { name: string, type: string, kind?: string });
    }

    export = Record
}

declare module 'WS.Data/Collection/RecordSet' {
    class RecordSet {
        getCount(): number;
    }

    export = RecordSet
}

declare module 'WS.Data/Entity/DataSet' {
    import Record = require('WS.Data/Entity/Record');

    class DataSet {
        getRow(): Record
    }

    export = DataSet
}
